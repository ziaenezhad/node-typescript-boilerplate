// export class TMDB{
//     constructor(){
//         var TMDBFilmsIndex = db_connection.define('tmdb_films', {
//     id: {
//         type: Sequelize.INTEGER.UNSIGNED,
//         primaryKey: true
//     },
//     status: Sequelize.STRING,
//     processed: Sequelize.BOOLEAN
// }, { timestamps: false, });
// TMDBFilmsIndex.sync({ force: false }).then(function () {
//     console.log('connected to the --o{[ ORIGILAN DATABASE ]}o-- .');
//     // Table created
//     // return TMDBFilmsIndex.create({
//     //     firstName: 'John',
//     //     lastName: 'Hancock'
//     // });
//     var tmdb_films = [];
//     var insert_promisesses = [];
//     console.log('reading tmdb export file [inputs/movie_ids_04_28_2017.json]');
//     require('bluebird').promisify(lineReader.eachLine)('inputs/movie_ids_04_28_2017.json', function (line, last) {
//         var film = JSON.parse(line);
//         tmdb_films.push({ id: film.id, status: film.adult ? 'adult' : 'waiting', processed: film.adult });
//         if (tmdb_films.length % 10000 == 0) {
//             insert_promisesses.push(TMDBFilmsIndex.bulkCreate(tmdb_films, { ignoreDuplicates: true }));
//             tmdb_films = [];
//             console.log(`inserting list ${insert_promisesses.length}`);
//         }
//     }).then(() => {
//         console.log(`${tmdb_films.length + (insert_promisesses.length-1) * 10000} films added.`);
//         console.log('inserting tmdb film ids to the db');
//         Promise.all(insert_promisesses).then(() => {
//             db_connection.close();
//             console.log('\nFinished');
//         });
//     }, console.error);
// });        
//     }
// }