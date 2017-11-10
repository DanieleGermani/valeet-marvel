export class Comic {

  constructor(
    public _id: number = Math.floor(Math.random() * 100),
    public digitalId: string = "",
    public title: string = "",
    public issueNumber: string ="",
    public variantDescription: string = "",
    public description: string = "",
    public isbn: string = "",
    public upc: string = "",
    public diamondCode: string = "",
    public ean: string = "",
    public issn: string = "",
    public format: string = "",
    public pageCount: string = "",
    public textObjects:any =TextObjects,
    public resourceURI: string = "",
    public url: string = "",
    // public series: Array<any>,
    public variantes: string = "",
    public collections: string = "",
    // public collectedIssues: Array<any>,
    // public dates: Array<any>,
    // public prices: Array<any>,
    // public images: Array<any>,
    // public creators: Array<any>,
    // public characters: Array<any>,
    // public stories: Array<any>,
    // public events: Array<any>,
    public editable: boolean = false
  ) {

  }
}
export class TextObjects{
    constructor(
        public language: string = "",
        public text: string = ""
    ){}
  }
