import React, { useState, useEffect } from "react";
import { apiProfileDetail, apiProfileFollowToggle } from "./lookup";
import { UserDisplay, UserPicture } from "./components";

function ProfileBadge(props) {
  const { user, didFollowToggle, profileLoading } = props;
  let action = user && user.is_following ? "Unfollow" : "Follow";
  action = profileLoading ? "Loading" : action;

  const handleFollowToggle = (e) => {
    e.preventDefault();
    if (didFollowToggle && !profileLoading) {
      didFollowToggle(action);
    }
  };

  return user ? (
    <div>
      <UserPicture user={user} hideLink />
      <p>
        <UserDisplay user={user} includeFullName hideLink />
      </p>
      <button onClick={handleFollowToggle} className="btn btn-primary">
        {action}
      </button>
    </div>
  ) : null;
}

export function ProfileBadgeComponent(props) {
  const { username } = props;

  const [didLookup, setDidLookup] = useState(false);
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(false);

  const handleBackendLookup = (response, status) => {
    if (status === 200) {
      setProfile(response);
    }
  };
  useEffect(() => {
    if (didLookup === false) {
      apiProfileDetail(username, handleBackendLookup);
      setDidLookup(true);
    }
  }, [username, didLookup, setDidLookup]);

  const handleNewFollow = (action) => {
    apiProfileFollowToggle(username, action, (response, status) => {
      if (status === 200) {
        setProfile(response);
      }
      setProfileLoading(false);
    });
    setProfileLoading(true);
  };

  return didLookup === false ? (
    "Loading..."
  ) : profile ? (
    <ProfileBadge
      user={profile}
      didFollowToggle={handleNewFollow}
      profileLoading={profileLoading}
    />
  ) : null;
}
