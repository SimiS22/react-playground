import React from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd';
import { useMoviesSearch } from './useMoviesSearch';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  flex-direction: column;
  box-sizing: border-box;
  background: #dadada;
`;

export class LifeCycleClassExample extends React.Component<{}, { count: number }> {
  private ref: number = 0;

  constructor(props: {}) {
    super(props);
    console.log(1);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(3);
    this.ref = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
      console.log('setInterval');
    }, 1000);
  }

  componentDidUpdate() {
    console.log(4);
  }

  componentWillUnmount() {
    window.clearInterval(this.ref);
  }

  render() {
    console.log(2);
    return <div>LifeCycleClassExample - {this.state.count}</div>;
  }
}

const LifeCycle: React.FC<{ age: number }> = (props) => {
  // const [counter, setCount] = useState(0);

  // useEffect(() => {
  //   const ref = setInterval(() => {
  //     setCount(counter + 1);
  //     console.log('setInterval');
  //   }, 1000);

  //   return () => {
  //     window.clearInterval(ref);
  //   };
  // }, [counter, props.age]);

  // useEffect(() => {
  //   console.log(`>> Mounted`);
  // }, []);

  const { handleFetch, movies, search, setSearch } = useMoviesSearch();

  return (
    <Container>
      <Input onChange={(event) => setSearch(event.target.value)} />

      <h2>Search for {search}</h2>
      <Button onClick={handleFetch}>fetch</Button>
      <h3>Results:</h3>

      {movies.map((m, i) => {
        return <h3 key={i}>{m}</h3>;
      })}
    </Container>
  );
};

export default LifeCycle;
