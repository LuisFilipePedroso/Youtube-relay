export default interface Tweet {
  _id: number;
  author: string;
  description: string;
  likes: number;
  createdAt: Date;
  formattedDate: string;
  updatedAt: Date;
}
