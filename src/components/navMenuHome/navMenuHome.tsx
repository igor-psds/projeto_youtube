import { useState } from "react";
import { 
    Container,
    SliderButton,
    SliderButtonIcon,
    Slider,
    SliderContent,
    Button
} from "./styles"
import ArrowRightIcon from "../../assets/icons/icon_right.png"
import ArrowLeftIcon from "../../assets/icons/icon_left.png"
import { useCategoryContext } from "../../contexts/searchCategories";

interface IProps {
    openMenu: boolean;
}

function CategoryBar({ openMenu }: IProps) {

    const [sliderPosition, setSliderPosition] = useState(0);

    const sliderWidth = 172;
    const containerWidth = 400;

    const handleNextClick = () => {
        if (sliderPosition > -(sliderWidth * 12) + containerWidth) {
          setSliderPosition((prevPosition) => prevPosition - sliderWidth);
        }
    };

    const handleBackClick = () => {
        if (sliderPosition < 0) {
          setSliderPosition((prevPosition) => prevPosition + sliderWidth);
        }
    };

    const categoryButtons = [
        {name: 'Tudo', id: '0'},
        {name: 'Música', id: '10'},
        {name: 'Jogos', id: '20'},
        {name: 'Esportes', id: '17'},
        {name: 'Notícias', id: '25'},
        {name: 'História', id: '22'},
        {name: 'Entreterimento', id: '24'},
        {name: 'Documentários', id: '35'},
        {name: 'Comédia', id: '23'},
        {name: 'Pets e Animais', id: '15'},
        {name: 'Automóveis', id: '2'},
        {name: 'Sci-Fi e Fantasía', id: '40'},
        {name: 'Animação', id: '31'},
        {name: 'Ciência e tecnologia', id: '28'},
        {name: 'Filme e Animação', id: '1'},
        {name: 'Filmes pequenos', id: '18'},
        {name: 'Viajem e Eventos', id: '19'},
        {name: 'Videoblog', id: '21'},
        {name: 'Como fazer', id: '26'},
        {name: 'Filmes', id: '30'},
        {name: 'Educação', id: '27'},
        {name: 'Ação e Aventura', id: '27'},
        {name: 'Clássicos', id: '33'},
        {name: 'Drama', id: '36'},
        {name: 'Família', id: '37'},
        {name: 'Horror', id: '39'},
        {name: 'Shows', id: '43'},
        {name: 'Trailers', id: '44'},
    ];

    const { setCategoryId } = useCategoryContext();

    function serachCategory(id: string) {
        setCategoryId(id);
    }

    return (
        <Container openMenu={openMenu}>
            <SliderButton onClick={handleBackClick}>
                <SliderButtonIcon alt="back icon" src={ArrowLeftIcon} />
            </SliderButton>
            <Slider>
                <SliderContent
                    style={{
                        transform: `translateX(${sliderPosition}px)`,
                        transition: '0.5s ease-in-out',
                    }}>
                        {categoryButtons.map((button, index) => (
                            <Button onClick={() => serachCategory(button.id)} key={index}>{button.name}</Button>
                        ))}
                    </SliderContent>
            </Slider>
            <SliderButton onClick={handleNextClick}>
                <SliderButtonIcon alt="next icon" src={ArrowRightIcon} />
            </SliderButton>
        </Container>
    )
}

export default CategoryBar;