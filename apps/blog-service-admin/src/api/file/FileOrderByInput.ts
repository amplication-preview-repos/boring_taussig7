import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fileName?: SortOrder;
  fileType?: SortOrder;
  fileUrl?: SortOrder;
  fileSize?: SortOrder;
};