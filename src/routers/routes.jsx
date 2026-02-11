import {Routes, Route, BrowserRouter } from 'react-router-dom';
export function MyRoutes() {
    return (
        <>
            {/* Other routes */}
            <Route path="/login" element={<LoginTemplate />} />
        </>
    );
}import { LoginTemplate } from '../components/templates/loginTemplate.jsx'; 