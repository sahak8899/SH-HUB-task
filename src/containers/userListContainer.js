import React, { useEffect } from 'react';
import { AppController } from '../controllers/app';

export default function UserListContainer() {
    useEffect(() => {
        AppController.init()
    }, [])
    return (
        <div>
            
        </div>
    )
}
