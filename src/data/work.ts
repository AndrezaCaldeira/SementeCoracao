export const works: Work[] = [
  {
    name: "Nome do projeto 1",
    columns: [
      {
        imgSrc: "/works/001/img1.png",
        caption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula urna vel ex gravida, ut ultrices justo faucibus.",
      },
      {
        imgSrc: "/works/001/img2.png",
        subImgSrc: "/works/001/img4.png",
      },
      {
        hasVideo: false,
        videoSrc: "",
        imgSrc: "/works/001/img3.png",
        caption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula urna vel ex gravida, ut ultrices justo faucibus.",
      },
    ],
  },
  {
    name: "Nome do projeto 2",
    columns: [
      {
        imgSrc: "/works/002/img1.png",
        caption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula urna vel ex gravida, ut ultrices justo faucibus.",
      },
      {
        imgSrc: "/works/002/img2.png",
        subImgSrc: "/works/002/img3.png",
      },
      {
        hasVideo: false,
        videoSrc: "",
        imgSrc: "/works/002/img4.png",
        caption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula urna vel ex gravida, ut ultrices justo faucibus.",
      },
    ],
  },
];

type Work = {
  name: string;
  columns: Column[];
};

type Column = {
  imgSrc: string;
  caption?: string;
  subImgSrc?: string;
  hasVideo?: boolean;
  videoSrc?: string;
};
