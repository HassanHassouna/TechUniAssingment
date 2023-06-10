import {FC} from "react";
import {TestimonialsData} from "./sections.consts";
import {
    TestimonialSectionContainer,
    TestimonialCard,
    CardTitle,
    CardSubTitle,
    TestimonialCardPhoto,
    CardsSlider
} from './sections.styled'

export const Testimonials: FC = () => {
    return (
        <TestimonialSectionContainer>
            <CardsSlider>
                {TestimonialsData.map(({name, title, photo, description}, index) => (
                    <div key={index}>
                        <TestimonialCardPhoto src={photo} alt="photo"/>
                        <TestimonialCard>
                            <p>{description}</p>
                            <CardTitle>{name}</CardTitle>
                            <CardSubTitle>{title}</CardSubTitle>
                        </TestimonialCard>
                    </div>
                ))}
            </CardsSlider>
        </TestimonialSectionContainer>
    )
}
