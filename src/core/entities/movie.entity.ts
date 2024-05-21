

export class Movie {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public releaseDate: Date,
    public rating: number,
    public poster: string,
    public backdrop: string
  ) { }
}


export class FullMovie extends Movie {
  constructor(
    id: number,
    title: string,
    description: string,
    releaseDate: Date,
    rating: number,
    poster: string,
    backdrop: string,
    // Nuevas propiedades para FullMovie
    public genres: string[],
    public duration: number,
    public budget: number,
    public originalTitle: string,
    public productionCompanies: string[]
  ) {
    // Llamada al constructor de la clase base
    super(id, title, description, releaseDate, rating, poster, backdrop);
  }
}