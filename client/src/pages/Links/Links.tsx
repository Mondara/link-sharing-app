import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { Button, LinkList, NoLinks } from '@/components'
import { useProfileContext } from '@/context';

export const Links = () => {
    const { profileData, addLink, reorderLinks } = useProfileContext();

    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        if (result.destination.index === result.source.index) {
            return
        }

        reorderLinks(
            profileData.links,
            result.source.index,
            result.destination.index
        )
    }
    return (

        <>
            <div className="links-header">
                <h1 className="heading-md">Customize your links</h1>
                <p className="body-md text-grey">Add/edit/remove links below and then share all your profiles with the world!</p>
            </div>

            <div className="links-body-layout w-full h-full overflow-auto">
                <Button variant='secondary' text="+ Add new link" onClick={() => addLink()} disabled={profileData.links?.length > 4} />
                <div className="link-container-layout w-full">
                    {profileData.links?.length > 0 ?
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="list">
                                {provided => (
                                    <div ref={provided.innerRef} {...provided.droppableProps} className="w-full h-full flex flex-col gap-5">
                                        <LinkList links={profileData.links} />
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                        : <NoLinks />}
                </div>
            </div>
        </>

    )
}

