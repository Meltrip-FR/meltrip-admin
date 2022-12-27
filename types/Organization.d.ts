export interface Organization {
  id?: number;
  siret: string;
  denominationUniteLegale?: string;
  numeroVoie?: string;
  typeVoie?: string;
  codePostal?: string;
  voie?: string;
  commune?: string;
  codeCommune?: string;
  cedex?: string;
  createdAt: Date;
  updatedAt: Date;
}
