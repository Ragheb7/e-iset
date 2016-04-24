


var db = openDatabase('db_local_iset', '1.0', 'db_iset1', 100000);
function init() {
    db.transaction(function (tx) {

        tx.executeSql(' create table if not exists utilisateur(cin INTEGER PRIMARY KEY, email TEXT UNIQUE, nom TEXT , prenom TEXT, mdp TEXT , imageUrl TEXT , idDep INTEGER, FOREIGN KEY(idDep) REFERENCES departement(idDep))');
        tx.executeSql(' create table if not exists etudiant( cinEtu INTEGER PRIMARY KEY, numIns INTEGER ,dateNaissance Date ,niveau TEXT, FOREIGN KEY (cinEtu) REFERENCES utilisateur(cin) )');
        tx.executeSql(' create table if not exists departement(idDep INTEGER PRIMARY KEY,nomDep text) ');
        tx.executeSql(' create table if not exists groupe(idGroup INTEGER PRIMARY KEY, nomGroupe TEXT, nbrEtudiant INTEGER ,idDep INTEGER ,FOREIGN KEY(idDep) REFERENCES departement(idDep)) ');
        tx.executeSql(' create table if not exists administrateur (idAd INTEGER PRIMARY KEY, login TEXT , mdp TEXT) ');
        tx.executeSql(' create table if not exists departement (idDep INTEGER PRIMARY KEY,nomDep text) ');
        tx.executeSql(' create table if not exists groupe (idGroup INTEGER PRIMARY KEY, nomGroupe TEXT, nbrEtudiant INTEGER ,idDep INTEGER ,FOREIGN KEY(idDep) REFERENCES departement(idDep)) ');
        tx.executeSql(' create table if not exists proposition(idProp INTEGER PRIMARY KEY, sujet text, discription text, cinEns INTEGER, FOREIGN KEY (cinEns) REFERENCES enseignant(cinEns))');
        tx.executeSql(' create table if not exists evenement(idEve INTEGER PRIMARY KEY, sujet text, discription text, cinEns INTEGER, FOREIGN KEY (cinEns) REFERENCES enseignant(cinEns)) ');
        tx.executeSql(' create table if not exists matiere(idMat INTEGER PRIMARY KEY, nomMat text, cin INTEGER, FOREIGN KEY(cin) REFERENCES utilisateur(cin))');
        tx.executeSql(' create table if not exists document(idDoc INTEGER PRIMARY KEY, titre TEXT,url TEXT, cin INTEGER, FOREIGN KEY(cin) REFERENCES utilisateur(cin)) ');
        tx.executeSql(' create table if not exists cours(idCour INTEGER PRIMARY KEY, FOREIGN KEY(idCour) REFERENCES document(idDoc))');
        tx.executeSql(' create table if not exists td(idTD INTEGER PRIMARY KEY, FOREIGN KEY(idTD) REFERENCES document(idDoc))');
    });

}


