import React, {useContext, useState} from 'react';
import {Container, TabList, TabItem, TabText, Title, Text, Stats, StatsSub, StatsText, StatsNumber} from './style';

const Tabs = ({data, tabLinks, activeTabHandler}) => {

    return (
        <Container>
            <TabList>
                {
                    tabLinks.map((link,index) =>(
                        <TabItem 
                        key={index} 
                        role="button" 
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
        </Container>
    )
}

export default Tabs;
