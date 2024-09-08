import React from 'react';
import Card from '../index';
import { Gutter } from '../../Gutter';
import './index.module.scss'
import Link from 'next/link';

function CardStyle() {
  return (
    <Gutter>
      <h3 className='textCenter'>Why Travel with Jae Travel Expeditions?</h3>
      <div className="container">
        <Link href='./our-safaris' ><Card frontContent="Wildlife Safaris" backContent="For Wildlife Lovers you book and we deliver" cardIndex={0} /></Link>
        <Link href='./bird-watching-safaris'><Card frontContent="Birdwatching Safaris" backContent="We have a team that is very keen in Bird-watching Safaris." cardIndex={1} /></Link>
        <Link href='./migration-safaris'> <Card frontContent="Migration Safaris" backContent="We ensure you get the spectacular migration experience in Maasai Mara" cardIndex={2} /></Link>
      </div>
    </Gutter>
  );
}

export default CardStyle;
