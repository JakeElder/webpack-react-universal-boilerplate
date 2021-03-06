/* eslint-disable react/no-danger */

import React from 'react'
import PropTypes from 'prop-types'
import ResponsiveEmbed from 'react-responsive-embed'
import ArrowBack from 'react-icons/lib/md/arrow-back'
import { formatDate } from '../../utils'
import s from './VideoDetailPage.css'

const VideoDetailPage = ({ video }) => (
  <div className={s.root}>
    <h1 className={s.heading}>
      <a className={s.backArrow} href="/" data-push title="Home">
        <ArrowBack />
      </a>
      <span>
        {video.title}
      </span>
    </h1>
    <div className={s.publishedAt}>
      <span className={s.publishedAtLabel}>Published: </span>
      <time className={s.publishedAtDate} dateTime={video.publishedAt}>
        {formatDate(video.publishedAt)}
      </time>
    </div>
    <div className={s.video}>
      <ResponsiveEmbed
        src={`https://www.youtube.com/embed/${video.id}`}
      />
    </div>
    <div
      className={s.description}
      dangerouslySetInnerHTML={{ __html: video.description }}
    />
  </div>
)

VideoDetailPage.propTypes = {
  video: PropTypes.object.isRequired
}

export default VideoDetailPage
