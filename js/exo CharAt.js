'use strict'

/* fonction pour indiquer pour chaque suite de W et B le nombre d'occurence suivi de W ou B en fonction de où en est la lecture. 
	 EX : pour WWWWWWBWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWW
		doit donner 6W1B10W3B20W1B11W
*/
function LRE(string)
{
	// initialise variable pour résultat à string vide
    var result = "";
    // variable currentChar initialisée à premier index de la string
		// string.charAt(nb) = se positionne sur l'index "nb" de la string "string"
	var currentChar = string.charAt(0);
	// variable pour compter les occurences, initialisée à 1 car string débute directe sur une occurence dans tous les cas
	var count = 1;
	// boucle qui parcoure toute la string, initialisée à 1 car on va partir du premier (0) index et le comparer au suivant (1)
	for (var i = 1; i < string.length ; i++)
	{
		// si le caractère lu suivant (charAt(i) sachant que 1 sera toujours supérieur à 1 à currentChar de par leurs initialisations respectives) est différent du caractère currentChar (W ou B en fonction de la séquence lu)
		if (currentChar != string.charAt(i)) {
			// rajoute count à la variable result (le chiffre de la séquence dans l'écriture compressée)
			result += count;
			// rajoute currentChar (B ou W en fonction) à la variable result pour l'afficher derrière le chiffre count
			result += currentChar;
			// donne à currentChar valeur de l'index lu à l'instant T
			currentChar = string.charAt(i);
			// reset le count à 1 car on pointe directement sur le premier élément de W ou B suivant
			count = 1;
		} else { // sinon
			// incrémente count (compte occurences continues de W ou B)
			count ++;
		}
	}
	// rajoute count à la variable result  (le chiffre de la séquence dans l'écriture compressée) pour dernière séquence (car boucle for boucle tant qu'inférieur à length donc pour le dernier caractère va être false et ne pas afficher)
	result += count;
	// rajoute currentChar (B ou W en fonction) à la variable result pour l'afficher derrière le chiffre count pour dernière séquence (car boucle for boucle tant qu'inférieur à length donc pour le dernier caractère va être false et ne pas afficher)
	result += currentChar;
	// renvoie résult pour affichage ultérieur
	return result;
}

// string qu'on passe à la fonction en paramètre
var string = "WWWWWWBWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWW";

// variable correspondant à la formule compressée que l'on cherche à obtenir par la fonction LRE à laquelle on envoie la string en paramètre
var compressedString = LRE(string);

// écrire en brut sur la page la string d'origine
document.write("<p>String d'origine : " + string + "</p>");

// écrire en brut sur la page la string compressée à la ligne suivante
	// ici doit donner "6W1B10W3B20W1B11W"
document.write("<p>String compressée : " + compressedString + "</p>");
