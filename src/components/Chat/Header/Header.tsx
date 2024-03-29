import classNames from 'classnames';
import { IconButton } from "../../IconButton/IconButton";
import menuIcon from "../../../assets/icons/menuIcon.svg"
import logo from "../../../assets/icons/logo.svg";
import cls from './Header.module.css';

interface HeaderProps {
   className?: string;
   title?: string;
}

export const Header = ({ className, title }: HeaderProps) => {
   return (
      <div className={classNames(className, cls.header)}>
         <IconButton className={cls.iconButton} icon={menuIcon} />
         <span className={cls.title}>{title}</span>
         <div className={cls.logoWrapper}>
            <img className={cls.logo} src={logo} alt="ChatLogo" />
         </div>
      </div>
   );
};