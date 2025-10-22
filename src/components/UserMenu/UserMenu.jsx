import { getCurrentUser } from '../../redux/user/userSelectors';
import { useSelector, useDispatch } from 'react-redux';
import logOut from '../../redux/user/operations/logOut';
import { UserMenuStyles } from './UserMenuStyles.styled';
import { User, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UserMenu = () => {
  const { name } = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function onBtnClick() {
    dispatch(logOut());
  }

  return (
    <UserMenuStyles>
      <div className="user-info">
        <User />
        <p>{name?.length > 6 ? `${name?.slice(0, 6)}...` : name}</p>
      </div>
      <button type="button" onClick={onBtnClick}>
        <LogOut /> {t('general.log-out-btn')}
      </button>
    </UserMenuStyles>
  );
};

export default UserMenu;
