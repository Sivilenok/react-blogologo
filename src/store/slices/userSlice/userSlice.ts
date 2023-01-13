import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import auth from "services/firebase";

interface IUser {
  name: string;
  email: string;
  id: string;
  isAuth: boolean;
  error?: string;
}

interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

interface ISignIn {
  email: string;
  password: string;
}

interface IUserData {
  userName: string;
  userEmail: string;
}

export const fetchRegisterUser = createAsyncThunk<
  IUserData,
  IRegisterUser,
  { rejectValue: FirebaseError }
>("auth/registerUser", async ({ name, email, password }, { rejectWithValue }) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const userName = name as string;
    const userEmail = response.user.email as string;
    return { userEmail, userName };
  } catch (error) {
    const firebaseError = error as { code: FirebaseError };
    return rejectWithValue(firebaseError.code);
  }
});

export const fetchSignIn = createAsyncThunk<IUserData, ISignIn, { rejectValue: FirebaseError }>(
  "auth/SignIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      return {
        userEmail: response.user.displayName!,
        userName: response.user.email!,
      };
    } catch (error) {
      const firebaseError = error as { code: FirebaseError };
      return rejectWithValue(firebaseError.code);
    }
  },
);

export const fetchUpdateUser = createAsyncThunk<
  void,
  IRegisterUser,
  { rejectValue: FirebaseError }
>("auth/updateUser", async ({ name, email, password }, { rejectWithValue }) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await updatePassword(user, password);
      await updateEmail(user, email);
      await updateProfile(user, {
        displayName: name,
      });
    } catch (error) {
      const firebaseError = error as { code: FirebaseError };
      return rejectWithValue(firebaseError.code);
    }
  }
});

const initialState: IUser = {
  name: "",
  email: "",
  id: "",
  isAuth: false,
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isAuth = true;
    },
    removeUser: (state) => {
      state.email = "";
      state.id = "";
      state.name = "";
      state.isAuth = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRegisterUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.userName;
      state.email = payload.userEmail;
    });
    builder.addCase(fetchRegisterUser.rejected, (state, { payload }) => {
      state.error = payload?.code;
    });
    builder.addCase(fetchSignIn.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.email = payload.userEmail;
      state.name = payload.userName;
    });
    builder.addCase(fetchSignIn.rejected, (state, { payload }) => {
      state.error = payload?.code;
    });
    builder.addCase(fetchUpdateUser.rejected, (state, { payload }) => {
      state.error = payload?.code;
    });
  },
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
