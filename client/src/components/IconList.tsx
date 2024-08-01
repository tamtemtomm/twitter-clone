

import { ReactComponent as CommentIcon } from "../assets/comment.svg";
import { ReactComponent as RetweetIcon } from "../assets/retweet.svg";
import { ReactComponent as LikeIcon } from "../assets/like.svg";
import { ReactComponent as ViewIcon } from "../assets/view.svg";
import { ReactComponent as BookmarkIcon } from "../assets/bookmark.svg";
import { ReactComponent as UploadIcon } from "../assets/upload.svg";

import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as ExploreIcon } from "../assets/explore.svg";
import { ReactComponent as NotificationIcon } from "../assets/notification.svg";
import { ReactComponent as MessageIcon } from "../assets/message.svg";
import { ReactComponent as CommunityIcon } from "../assets/communities.svg";
import { ReactComponent as ProfileIcon } from "../assets/profile.svg";
import { ReactComponent as OtherIcon } from "../assets/svg/more.svg";

export interface IconProps {
  color?: string;
  stroke?: string;
  width?: string;
  scale?: string;
}

export const CommentIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ display: "flex", width: props.width }}>
      <CommentIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};

export const RetweetIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ display: "flex", width: props.width }}>
      <RetweetIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};

export const LikeIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ display: "flex", width: props.width }}>
      <LikeIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};

export const ViewIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ display: "flex", width: props.width }}>
      <ViewIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};

export const BookmarkIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ display: "flex", width: props.width }}>
      <BookmarkIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};

export const UploadIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ display: "flex", width: props.width }}>
      <UploadIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};

export const HomeIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ display: "flex", width: props.width }}>
      <HomeIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};

export const ExploreIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ display: "flex", width: props.width }}>
      <ExploreIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};

export const NotificationIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ display: "flex", width: props.width }}>
      <NotificationIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};

export const MessageIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ display: "flex", width: props.width }}>
      <MessageIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};

export const CommunityIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ display: "flex", width: props.width }}>
      <CommunityIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};

export const ProfileIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ display: "flex", width: props.width }}>
      <ProfileIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};

export const OtherIconComponent = (props: IconProps) => {
  return (
    <div className="icon-container" style={{ width: props.width }}>
      <OtherIcon
        fill={props.color}
        style={{
          width: props.width,
          scale: props.scale,
          fill: "left",
          stroke: props.stroke,
        }}
      />
    </div>
  );
};
