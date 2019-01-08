import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './albumList.css'
class AlbumList extends Component {
  renderAlbums = () => {
    return this.props.songs.map((song, i) => {
      return (
        <li
          onClick={() => {
            this.props.audioControl(song)
          }}
          className="album-item"
          key={i}
        >
          <div>
            <div className="album-image">
              <img src={song.track.album.images[0].url} alt="Album Artwork" />
              <div className="play-song">
                <i className="fa fa-play-circle-o play-btn" aria-hidden="true" />
              </div>
            </div>

            <div className="album-details">
              <p className="album-name">{song.track.album.name}</p>
              <p className="artist-name">{song.track.album.artists[0].name}</p>
            </div>
          </div>
        </li>
      )
    })
  }
  render() {
    return <ul className="album-view-container">{this.renderAlbums()}</ul>
  }
}
AlbumList.propTypes = {
  songs: PropTypes.array,
  audioControl: PropTypes.func,
}

export default AlbumList
