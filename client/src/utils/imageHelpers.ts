export const getImageURL = (image: File | string) => {
  if (image instanceof File) {
    return URL.createObjectURL(image);
  }

  return image;
};
