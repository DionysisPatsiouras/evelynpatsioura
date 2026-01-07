import { Button } from "react-bootstrap"

import Header from "./components/Header"

export default function NotFound() {

    return (

        <main>

            <Header />

            <div className="d-flex flex-column align-items-center py-5 primary_bg white-text">

                <h1 style={{ fontSize: '250px' }}>404</h1>

                <h3>Δεν βρέθηκε η σελίδα που ψάχνετε</h3>

                <Button
                    className="text-white"
                    href="/"
                >
                    Πίσω στην αρχική
                </Button>

            </div>

        </main>
    )
}