export type Joueur = {
    id: number;
    nom: string;
    prenom: string;
    numero: number;
    masse: number;
    taille: number;
    equipe: Equipe;
    photoUrl: string
};

export type Equipe = {
    id: number;
    nom: string;
};

export type Statistique = {
    joueur: Joueur;
    nbMatch: number;
    pd: number;
    minutes: number;
    points: number;
    rebonds: number;
    points3: number;
    lancerFranc: number;
};

