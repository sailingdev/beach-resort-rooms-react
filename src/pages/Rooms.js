import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomContainer';
import { Link } from 'react-router-dom';

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">
                        return home
                </Link>
                </Banner>
            </Hero>
            <RoomContainer />
        </>
    )
};

export default Rooms
