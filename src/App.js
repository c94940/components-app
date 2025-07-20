import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {

    return (
        <div>
            <div>
                <Button primary rounded className="mb-5">
                    <GoBell />
                    Click me
                </Button>
            </div>
            <div>
                <Button secondary rounded outline>
                    <GoCloudDownload />
                    Buy now
                </Button>
            </div>
            <div>
                <Button success outline>
                    < GoDatabase />
                    See deal
                </Button>
            </div>
            <div>
                <Button warning>
                    Hide ads
                </Button>
            </div>
            <div>
                <Button danger rounded outline>
                    Show more
                </Button>
            </div>
        </div>
    );
}

export default App;