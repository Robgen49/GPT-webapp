import classNames from 'classnames';
import cls from './Loader.module.css';

interface LoaderProps {
   className?: string;
}

export const Loader = ({ className }: LoaderProps) => {

   return (
      <div className={cls.loaderWrapper}>
         <div className={classNames(className, cls.loader)}>
         </div>
      </div>
   );
};