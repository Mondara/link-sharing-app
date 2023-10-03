import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

import { PlatformSelect } from '@/components';
import { DragAndDropIcon, LinkIcon, getPlaceholder } from '@/assets';
import { TextField } from '..';
import { LinksType, PlatformOptions } from '@/types';
import { useProfileContext } from '@/context';

interface Props {
    data: LinksType,
    index: number;
}

export const LinkCard: React.FC<Props> = ({ data, index }) => {
    const { updateLink, removeLink, errors } = useProfileContext();

    const handlePlatformUpdate = (selectOption: PlatformOptions) => {
        const newLink = {
            ...data,
            platform: selectOption
        }

        updateLink(newLink);
    }

    const handleLinkUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newLink = {
            ...data,
            link: e.target.value
        }

        updateLink(newLink);
    }


    return (

        <Draggable draggableId={data.id} index={index}>
            {provided => (
                <div ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <div className="link-container-layout link-container-styles w-full overflow-visible">

                        <div className="link-header-layout text-grey">
                            <div className="flex items-center gap-2 text-grey" >
                                <button {...provided.dragHandleProps}>
                                    <DragAndDropIcon />
                                </button>
                                <p className="heading-sm font-bold">Link #{index + 1}</p>
                            </div>
                            <button className="body-md" onClick={() => removeLink(data.id)} >Remove</button>
                        </div>

                        <div className="link-platform-layout">
                            <p className='body-sm text-dark-grey mb-1'>Platform</p>
                            <PlatformSelect callback={handlePlatformUpdate} />
                        </div>

                        <div className="link-link-layout">
                            <p className='body-sm text-dark-grey mb-1'>Link</p>
                            <TextField icon={<LinkIcon />} value={data.link} onChange={handleLinkUpdate} placeholder={getPlaceholder(data.platform)} error={errors.linkError[data.id] !== ""} errorMessage={errors.linkError[data.id]} />
                        </div>
                    </div>
                </div>

            )}
        </Draggable>
    )
}
