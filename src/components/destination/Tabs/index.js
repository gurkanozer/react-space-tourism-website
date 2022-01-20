import React, {useContext, useState} from 'react';
import {Container,Inner, TabList, TabItem, TabText, Title, Text, Stats, StatsSub, StatsText, StatsNumber} from './style';

const Tabs = ({data, tabLinks, activeTabHandler}) => {

    return (
        <Container>
            <Inner>
                <TabList>
                    {
                        tabLinks.map((link,index) =>(
                            <TabItem 
                            key={index} 
                            aria-label={link} 
                            className={data.name === link ? 'active':''}
                            onClick={()=>activeTabHandler(link)}
                            ><TabText>{link}</TabText></TabItem>
                        ))
                    }
                </TabList>
                <Title>{data.name}</Title>
                <Text>{data.description}</Text>
                <Stats>
                    <StatsSub>
                        <StatsText>AVG. Dıstance</StatsText>
                        <StatsNumber>{data.distance}</StatsNumber>
                    </StatsSub>
                    <StatsSub>
                        <StatsText>EST. Travel Time</StatsText>
                        <StatsNumber>{data.travel}</StatsNumber>
                    </StatsSub>
                </Stats>
            </Inner>
        </Container>
    )
}

export default Tabs;
