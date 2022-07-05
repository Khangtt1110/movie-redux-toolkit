import React, { useState } from 'react';
import { Menu, Segment, Input, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import user from '~/images/user.png';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '~/features/movies/movieSlice';

const Header = () => {
    const [active, setActive] = useState('home');
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncMovies(searchValue));
        dispatch(fetchAsyncSeries(searchValue));
        setSearchValue('');
    };
    const handleItemClick = (e, { name }) => setActive(name);
    const activeItem = active;
    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item floated="right">
                    <img alt="login" src={user} />
                </Menu.Item>

                <Menu.Item name="home" active={activeItem === 'home'} onClick={handleItemClick}>
                    <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Item name="movie" active={activeItem === 'movie'} onClick={handleItemClick}>
                    <Link to="movie/1">Movie App</Link>
                </Menu.Item>

                <Menu.Item name="sign-in" active={activeItem === 'sign-in'} onClick={handleItemClick}>
                    <Link to="sign up">Sign in</Link>
                </Menu.Item>
                <Menu.Item>
                    <Form unstackable onSubmit={submitHandler}>
                        <Input
                            action={{ icon: 'search' }}
                            placeholder="Search..."
                            value={searchValue}
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                        />
                    </Form>
                </Menu.Item>
            </Menu>
        </Segment>
    );
};

export default Header;
