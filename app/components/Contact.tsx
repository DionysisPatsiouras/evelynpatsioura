
'use client'

import { useState } from 'react'

import emailjs from '@emailjs/browser'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { Container, Stack, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'


export default function Contact() {

    const [loading, setLoading] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('')

    const formSchema = yup.object({
        name: yup
            .string()
            .required('Υποχρεωτικό πεδίο'),
        email: yup
            .string()
            .email('Εισάγετε έγκυρη διεύθυνση email')
            .required('Υποχρεωτικό πεδίο'),
        message: yup
            .string()
            .required('Υποχρεωτικό πεδίο')
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(formSchema)
    })


    const onSubmit = async (formData: any) => {

        setLoading(true)

        const submittedData = {
            name: formData.name,
            email: formData.email,
            title: "evelynpatsioura.gr - Έχετε ένα νέο μήνυμα!",
            message: formData.message,
        }

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
                submittedData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            )

        } catch (error) {
            console.error('Email error:', error)
            setStatus("Προέκυψε ένα σφάλμα, δοκιμάστε ξανά αργότερα")
        } finally {
            setLoading(false)
            reset()
            setStatus("Το μήνυμα σας στάλθηκε!")
        }

    }



    return (
        <section className="p-5 fullheight" id="contact">

            <Container>

                <Stack gap={5} className="d-flex flex-column justify-content-center align-items-center">

                    <h2 className="dark_primary_text secondary-font">ΕΠΙΚΟΙΝΩΝΙΑ</h2>

                    <p className="text-center dark_primary_text" style={{ fontSize: '26px' }}>
                        Είμαι στη διάθεσή σας για διευκρινίσεις ή κλείσιμο ραντεβού. Συμπληρώστε τη φόρμα και θα επικοινωνήσω το συντομότερο
                    </p>


                    <Form className='col-12 col-md-4'>

                        <Stack gap={3}>

                            <div className="column">
                                <label className="">Όνοματεπώνυμο</label>
                                <input type="text"
                                    className="form-control my-1"
                                    {...register("name", {
                                        onChange: () => setStatus("")
                                    })}
                                />
                                {errors.name &&
                                    <p className='formValidationMessage'>{errors.name.message}</p>
                                }
                            </div>

                            <div className="column">
                                <label className="">Το email σας</label>
                                <input type="text"
                                    className="form-control my-1"
                                    {...register("email", {
                                        onChange: () => setStatus("")
                                    })}
                                />
                                {errors.email &&
                                    <p className='formValidationMessage'>{errors.email.message}</p>
                                }
                            </div>

                            <div className="column">
                                <label className="">Το μήνυμά σας</label>
                                <textarea
                                    className="form-control my-1"
                                    {...register("message", {
                                        onChange: () => setStatus("")
                                    })}
                                    style={{ resize: 'none' }}
                                />
                                {errors.message &&
                                    <p className='formValidationMessage'>{errors.message.message}</p>
                                }
                            </div>


                            <Button type="submit" className='w-100 modalButton'
                                onClick={handleSubmit(onSubmit)}
                                disabled={loading}
                            >

                                {loading
                                    ? <div
                                        className="spinner-grow white-text"
                                        style={{ width: "20px", height: "20px" }}
                                        role="status"
                                    />
                                    : "Αποστολή μηνύματος"
                                }

                            </Button>

                            <h4 className='text-center'>{status}</h4>

                            <h6 className='text-center'>Όλα τα μηνύματα παραμένουν αυστηρά εμπιστευτικά</h6>

                        </Stack>

                    </Form>

                </Stack>
                
            </Container>

        </section>
    )
}