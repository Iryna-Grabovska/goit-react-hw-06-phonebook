import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'store/filterSlice';

import s from './Filter.module.css';

import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  const dispatch = useDispatch();
  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={e => dispatch()}
      />
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
