export interface IAuthorData {
  name: string,
  birthday: Date
}

export interface IAuthor extends IAuthorData {
  authorId: number
}
