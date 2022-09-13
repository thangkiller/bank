import { useSelector, useDispatch } from 'react-redux';
import { withDraw1 } from './bank/backSlice';
import classNames from 'classnames/bind';
import { Button } from './component';
import styles from './App.module.scss';

const cx = classNames.bind(styles);
const AMOUNT1 = 10000;
const AMOUNT2 = 5000;

function App() {
  const money = useSelector(state => state.withDraw.value);
  const dispatch = useDispatch();
  return (
    <div className={cx('app')}>
      <div className={cx('app--header')}>
        <div className={cx('app--header--avatar')}>
          <img
            src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
            alt="avatar"
          />
        </div>
        <h2 className={cx('app--header--title')}>Hello, doc co cau bai!</h2>
      </div>
      <div className={cx('app--footer')}>
        <div className={cx('app--footer--btns')}>
          <Button
            className={cx('app--footer--btn')}
            onClick={() => dispatch(withDraw1(AMOUNT1))}
          >
            <span>{`withdraw $${AMOUNT1}`}</span>
          </Button>
          <Button
            className={cx('app--footer--btn')}
            onClick={() => dispatch(withDraw1(AMOUNT2))}
          >
            <span>{`withdraw $${AMOUNT2}`}</span>
          </Button>
        </div>
        <div className={cx('app--footer--caption')}>
          Give away all your cash to charity
        </div>
        <div className={cx('app--footer--block')}></div>
        <div className={cx('app--footer--money')}>
          <h2>{`$${money}`}</h2>
          <span className={cx('app--footer--money--decrip')}>Total Amount</span>
        </div>
      </div>
    </div>
  );
}

export default App;
