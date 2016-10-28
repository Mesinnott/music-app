let dataAdapter = require('.data-adapter'),
    uuid=dataAdapter.uuid,
    schemator = dataAdapter.schemator,
    DS=dataAdapter.DS,
    formatQuery = dataAdapter.formatQuery;


let Playlist = DS.defineResource({
    name: 'playlist',
    endpoint: 'playlists',
    filepath: __dirname + '/..data/playlists.db',
})

schemator.defineSchema('Playlist', {
    id:{
        type: 'string',
        nullable: false
    },
        name:{
            type:'string',
            nullable: false
        },
})


function create(name, song, cb) {
    let playlist = {id: uuid.v4(), name:name };
    let error = schemator.validateSync('Playlist', playlist)
    if(error){
        error.stack = true
        return cb(error);
    }
    Playlist.create(playlist).then(cb).catch(cb)
}

function getAll(query, cb){
    Playlist.findAll({}).then(cb).catch(cb)
}

function getById(id, query, cb){
    Playlist.find(id, formatQuery(query)).then(cb).catch(cb)
}
module.exports={
    create,
    getAll,
    getById
}