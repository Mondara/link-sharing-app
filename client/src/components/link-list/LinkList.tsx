import React from 'react'


import { LinksType } from '@/types';
import { LinkCard } from '..';


export const LinkList = React.memo(
    function LinkList({ links }: { links: LinksType[] }) {
        return (
            <>
                {links.map((link, idx) => (
                    <LinkCard key={link.id} data={link} index={idx} />
                ))}
            </>
        )
    });