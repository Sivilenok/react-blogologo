import { Category, fetchAllBlogEntries } from "store/slices/blogSlice/blogSlice";
import { SliderTitle, SliderWrapper } from "./styles";
import { getBlog, useAppDispatch, useAppSelector } from "store";
import { useEffect } from "react";

interface Props {
    category: Category;
    title: string;
}

export const Slider = ({ category, title }: Props) => {
    const { results } = useAppSelector(getBlog);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchAllBlogEntries({ category }));
      }, [dispatch, category ]);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 7000,
        cssEase: "linear",
        responsive: [
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            },
        },
        {
            breakpoint: 575,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
    ],
    
};
  return (
    <SliderWrapper>
        <SliderTitle>{title}</SliderTitle>
        {/*<Slider {...settings}>
        
  </Slider>*/}
    </SliderWrapper>
   
  );
};

