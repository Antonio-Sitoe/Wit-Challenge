import React from 'react';
import Button from './Button';
import { InputStyle, Wrapper } from './Styles';
import { ReactComponent as Searchs } from '../../Images/search.svg';
import { Erro } from './Styles';
import Loading from './Helper/Loading';

const Input = ({ onChange, error, onSubmit, value, loading }) => {
  return (
    <>
      <Wrapper onSubmit={onSubmit}>
        <InputStyle
          onChange={onChange}
          type='search'
          placeholder='type here...'
          value={value}
        />
        <Button disabled={loading}>
          {loading ? <Loading /> : <Searchs />}
        </Button>
      </Wrapper>
      {error && <Erro>{error}</Erro>}
    </>
  );
};

export default Input;
