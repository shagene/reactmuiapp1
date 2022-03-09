import React from "react";
import "./ImageList.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import ImageCard from "./ImageCard";

const ImageListComp = (props) => {
  // const images1 = props.images1.map(({ alt_description, id, urls }) => {
  //   return (
  //     <Box>
  //     <ImageList
  //       sx={{ width: "500", height: "450" }}
  //       variant='woven'
  //       cols={3}
  //       gap={8}>
  //       <ImageListItem key={id}>
  //         <img
  //           src={`${urls.regular}?w=161&fit=crop&auto=format`}
  //           srcSet={`${urls.regular}?w=161&fit=crop&auto=format&dpr=2 2x`}
  //           alt={alt_description}
  //           loading='lazy'
  //         />
  //       </ImageListItem>
  //     </ImageList>
  //     </Box>
  //   );
  // });

  // const images2 = props.images2.map(({ alt_description, id, urls }) => {
  //   return (
  //     <ImageList
  //       sx={{ width: "500", height: "450" }}
  //       variant='woven'
  //       cols={3}
  //       gap={8}>
  //       <ImageListItem key={id}>
  //         <img
  //           src={`${urls.regular}?w=161&fit=crop&auto=format`}
  //           srcSet={`${urls.regular}?w=161&fit=crop&auto=format&dpr=2 2x`}
  //           alt={alt_description}
  //           loading='lazy'
  //         />
  //       </ImageListItem>
  //     </ImageList>
  //   );
  // });
  // return (
  //   <>
  //     {images1}
  //     <Box>{images2}</Box>
  //   </>
  // );
  console.log(props);
  // return (
  //   <>
  //     <Box>
  //       <ImageList
  //         sx={{ width: "500", height: "450" }}
  //         variant='woven'
  //         cols={3}
  //         gap={8}>
  //         {props.images1.map((item) => (
  //           <ImageListItem key={props.images1.id}>
  //             <img
  //               src={`${item.urls.regular}?w=161&fit=crop&auto=format`}
  //               srcSet={`${item.urls.regular}?w=161&fit=crop&auto=format&dpr=2 2x`}
  //               alt={item.alt_description}
  //               loading='lazy'
  //             />
  //           </ImageListItem>
  //         ))}
  //       </ImageList>
  //     </Box>
  //     <Box>
  //       <ImageList
  //         sx={{ width: "500", height: "450" }}
  //         variant='woven'
  //         cols={3}
  //         gap={8}>
  //         {props.images2.map((item2) => (
  //           <ImageListItem key={props.images2.id}>
  //             <img
  //               src={`${item2.urls.regular}?w=161&fit=crop&auto=format`}
  //               srcSet={`${item2.urls.regular}?w=161&fit=crop&auto=format&dpr=2 2x`}
  //               alt={item2.alt_description}
  //               loading='lazy'
  //             />
  //           </ImageListItem>
  //         ))}
  //       </ImageList>
  //     </Box>
  //   </>
  // );

  const images1 = props.images1.map(({ alt_description, id, urls }) => {
    return <img alt={alt_description} key={id} src={urls.regular} />;
  });
  const images2 = props.images2.map(({ alt_description, id, urls }) => {
    return <img alt={alt_description} key={id} src={urls.regular} />;
  });
  return (
    <div>
      <Box className='image-list' sx={{ pb: 2 }}>
        {images1}
      </Box>
      <Box className='image-list' sx={{ pb: 2 }}>
        {images2}
      </Box>
    </div>
  );
};

export default ImageListComp;
