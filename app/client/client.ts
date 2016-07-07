/**
 * Client
 */
export class Client {
	id: number;
	nom: string;
	prenom: string;
	age: number;
	nombre_enfant: number;
	profession: string;
	adresse:string;
	caution: number;
	
	constructor(id: number, nom: string, prenom: string, age: number,nombre_enfant:number, profession: string,adresse:string, caution: number) {
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
		this.nombre_enfant = nombre_enfant;
		this.profession = profession;
		this.adresse = adresse;
		this.caution = caution;
	}
}