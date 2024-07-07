export type File = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fileName: string | null;
  fileType: string | null;
  fileUrl: string | null;
  fileSize: number | null;
};
