import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import { Cart, Button, Icon } from 'semantic-ui-react';
import StatusBar from '../StatusBar';


const AlbumList = (props) => {
    const { albums, photos, deleteAlbum, updateAlbum, createAlbum } = props;

    const getAlbumPhotos = (album) => {
        return album.photosIds.map(id => {
            return photos[id]
        })
    };

    const renderAlbums = (albums) => {
        Object.keys(albums).map(key =>{
            const album = albums[key];
            const albumPhotos = getAlbumPhotos(album)

            return (
                <Album key={key} 
                    album={album}
                    albumPhotos={albumPhotos}>
                    <Button icon>
                        <Icon name="play" />
                    </Button>
                    <Button icon>
                        <Icon name="edit" />
                    </Button>
                    <Button icon>
                        <Icon name="trash" />
                    </Button>
                </Album>
            )
        })
    };

    return (
        <div>
            <StatusBar>
                <Card.Group itemsPerRow={4} doubling>
                    {renderAlbums()}
                </Card.Group>
            </StatusBar>
        </div>
    );
}

AlbumList.propTypes = {
    albums: PropTypes.object.isRequired,
    photos: PropTypes.object.isRequired,
    // deleteAlbum: PropTypes.func.isRequired,
    // updateAlbum: PropTypes.func.isRequired,
    // createAlbum: PropTypes.func.isRequired,
}

export default AlbumList;