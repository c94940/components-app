import Accordion from './components/Accordion';

function App() {
    const items = [
        {
            id: 'asdf',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project. You can use React on any project. You can use React on any project. You can use React on any project. You can use React on any project.'
        },
        {
            id: 'qwer',
            label: 'Can I use JavaScript on a project?',
            content: 'You can use React on any project. You can use React on any project. You can use React on any project. You can use React on any project. You can use React on any project.'
        },
        {
            id: 'zxcv',
            label: 'Can I use CSS on a project?',
            content: 'You can use React on any project. You can use React on any project. You can use React on any project. You can use React on any project. You can use React on any project.'
        }
    ]
    
    return <Accordion items={items} />;
}

export default App;