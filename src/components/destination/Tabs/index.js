import React from 'react';
import {Container, TabList, TabItem, TabText, Title, Text, Stats, StatsSub, StatsText, StatsNumber} from './style';

const Tabs = () => {
    return (
        <Container>
            <TabList>
                <TabItem role="button" aria-label="Moon" className="active"><TabText>Moon</TabText></TabItem>
                <TabItem role="button" aria-label="Mars"><TabText>Mars</TabText></TabItem>
                <TabItem role="button" aria-label="Europa"><TabText>Europa</TabText></TabItem>
                <TabItem role="button" aria-label="Titan"><TabText>Titan</TabText></TabItem>
            </TabList>
            <Title>MOON</Title>
            <Text>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting to Luna 2 and Apollo 11 landing sites.</Text>
            <Stats>
                <StatsSub>
                    <StatsText>AVG. Dıstance</StatsText>
                    <StatsNumber>384,400 KM</StatsNumber>
                </StatsSub>
                <StatsSub>
                    <StatsText>EST. Travel Time</StatsText>
                    <StatsNumber>3 DAYS</StatsNumber>
                </StatsSub>
            </Stats>
        </Container>
    )
}

export default Tabs;
