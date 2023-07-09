export interface ItemTypes {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
export interface ItemPropsType {
  item: ItemTypes;
}
