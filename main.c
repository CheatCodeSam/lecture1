#include <stdint.h>
#include <stdio.h>

struct PIXEL {
  unsigned char b;
  unsigned char g;
  unsigned char r;
};

int invertImage(char fileName[]) {

  struct PIXEL pixel;

  char filetype[2];
  unsigned int width = 0;
  unsigned int height = 0;

  FILE *fp = fopen(fileName, "rb+");

  fread(filetype, 1, 2, fp);
  printf("Value is %c\n", filetype[1]);

  // Check if file format is BM
  if (filetype[0] != 'B' && filetype[1] != 'M') {
    printf("File format not supported");
    return 1;
  }

  // Go to dataoffset
  fseek(fp, 16, SEEK_CUR);

  fread(&width, 4, 1, fp);
  printf("Width is %d\n", width);

  fread(&height, 4, 1, fp);
  printf("Height is %d\n", height);

  // skip though other unimportant data
  fseek(fp, 26, SEEK_CUR);

  int number_of_pixels = height * width;
  int index;
  for (index = 0; index < number_of_pixels; index++) {
    fread(&pixel.b, 1, 1, fp);
    unsigned int blue = pixel.b;
    blue = ~blue;
    pixel.b = (int8_t)blue;

    fread(&pixel.g, 1, 1, fp);
    unsigned int green = pixel.g;
    green = ~green;
    pixel.g = (int8_t)green;

    fread(&pixel.r, 1, 1, fp);
    unsigned int red = pixel.r;
    red = ~red;
    pixel.r = (int8_t)red;

    fseek(fp, -3, SEEK_CUR);
    fwrite(&pixel.b, 1, 1, fp);
    fwrite(&pixel.g, 1, 1, fp);
    fwrite(&pixel.r, 1, 1, fp);
  }
  fclose(fp);
  return 0;
}

int main(int argc, char *argv[]) {

  char *image = "image.bmp";

  return invertImage(image);
}