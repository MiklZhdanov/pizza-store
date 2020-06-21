import * as React from "react";
import { styled } from "config/theme";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { Redirect } from "react-router";

interface IProfilePageProps {
  className?: string;
}

const ProfilePageComponent: React.FunctionComponent<IProfilePageProps> = ({
  className,
}) => {
  const { user } = useSelector((state: AppState) => ({
    user: state.auth.currentUser,
    loading: state.auth.loading
  }));
//   const dispatch = useDispatch();

  return !user ? (
    <Redirect to="/" />
  ) : (
    <div className={className}>
        <div className="profile">
            <div className="profile-title">Profile of: <b>{` ${user.username}`}</b></div>
            <div>email: <b>{user.email}</b></div>
        </div>
        <div className="orders-history">
            <div className="orders-history-title">
                Orders history
            </div>
            <div>
                {user.orders?.map(order => <div key={order.id} className="orders-history-item">
                {`id: ${order.id}, total sum: ${order.totalSum}, items: ${order.items}, delivery: ${order.delivery}, address: ${order.address}.`}
                </div>) || "You have no orders yet"}
            </div>
        </div>
    </div>
  );
};

export const ProfilePage = styled(ProfilePageComponent)`
    .profile{
        margin: 0 0 20px;
        &-title{
            font-size: 16px;
            b{
                font-size: 24px;
                text-transform: uppercase;
            }
        }
    }
    .orders-history{
        &-title{
            font-size: 18px;
        }
    }
    .orders-history-item{
      padding: 10px 0;
      border-bottom: 1px solid ${props => props.theme.colors.alto};
    }
`;
