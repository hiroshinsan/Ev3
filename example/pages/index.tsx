import Button from '@ev3/components/react/Button';
import Input from '@ev3/components/react/Input';
import Textarea from '@ev3/components/react/Textarea';

import Checkbox from '@ev3/components/react/Checkbox';
import Radio from '@ev3/components/react/Radio';
import Switch from '@ev3/components/react/Switch';

import Select from '@ev3/components/react/Select';

const Page = () => {
  const options = [
    {label: 'Option 1', value: 'option-1', keyword: 'option1'},
    {label: (<em className="font-bold">Option 2</em>), value: 'option-1', keyword: 'option2'},
    {label: 'Option 3', value: 'option-1', keyword: 'option3'},
  ];
  return (
    <div className="p-4">
      <Input label="Input " />
      <Input label="Input Error" error="Something" />
      <Textarea label="Textarea " rows={1} />
      <Textarea label="Textarea Error" error="Something" />
  
      <div>
        <Button xs>Button 0</Button>
        <Button xs curved success>Button 1</Button>
        <Button xs rounded warning>Button 2</Button>
        <Button xs pill danger>Button 3</Button>
        <Button xs info>Button 4</Button>
        <Button xs muted>Button 5</Button>
  
        <Button xs outline success>Button 6</Button>
        <Button xs outline warning>Button 7</Button>
        <Button xs curved outline danger>Button 8</Button>
        <Button xs rounded outline info>Button 9</Button>
        <Button xs pill outline muted>Button 10</Button>
  
        <Button xs rounded transparent success>Button 11</Button>
        <Button xs pill transparent warning>Button 12</Button>
        <Button xs curved transparent danger>Button 13</Button>
        <Button xs transparent info>Button 14</Button>
        <Button xs transparent muted>Button 15</Button>
      </div>
      <div>
        <Button sm>Button 0</Button>
        <Button rounded sm success>Button 1</Button>
        <Button pill sm warning>Button 2</Button>
        <Button curved sm danger>Button 3</Button>
        <Button sm info>Button 4</Button>
        <Button sm muted>Button 5</Button>
  
        <Button sm outline success>Button 6</Button>
        <Button curved sm outline warning>Button 7</Button>
        <Button rounded sm outline danger>Button 8</Button>
        <Button pill sm outline info>Button 9</Button>
        <Button sm outline muted>Button 10</Button>
  
        <Button sm transparent success>Button 11</Button>
        <Button sm transparent warning>Button 12</Button>
        <Button sm transparent danger>Button 13</Button>
        <Button rounded sm transparent info>Button 14</Button>
        <Button pill sm transparent muted>Button 15</Button>
      </div>
      <div>
        <Button md>Button 0</Button>
        <Button rounded md success>Button 1</Button>
        <Button pill md warning>Button 2</Button>
        <Button curved md danger>Button 3</Button>
        <Button md info>Button 4</Button>
        <Button md muted>Button 5</Button>
  
        <Button md outline success>Button 6</Button>
        <Button curved md outline warning>Button 7</Button>
        <Button rounded md outline danger>Button 8</Button>
        <Button pill md outline info>Button 9</Button>
        <Button md outline muted>Button 10</Button>
  
        <Button md transparent success>Button 11</Button>
        <Button md transparent warning>Button 12</Button>
        <Button curved md transparent danger>Button 13</Button>
        <Button rounded md transparent info>Button 14</Button>
        <Button pill md transparent muted>Button 15</Button>
      </div>
      <div>
        <Button lg>Button 0</Button>
        <Button rounded lg success>Button 1</Button>
        <Button pill lg warning>Button 2</Button>
        <Button curved lg danger>Button 3</Button>
        <Button lg info>Button 4</Button>
        <Button lg muted>Button 5</Button>
  
        <Button lg outline success>Button 6</Button>
        <Button curved lg outline warning>Button 7</Button>
        <Button rounded lg outline danger>Button 8</Button>
        <Button pill lg outline info>Button 9</Button>
        <Button lg outline muted>Button 10</Button>
  
        <Button lg transparent success>Button 11</Button>
        <Button lg transparent warning>Button 12</Button>
        <Button curved lg transparent danger>Button 13</Button>
        <Button rounded lg transparent info>Button 14</Button>
        <Button pill lg transparent muted>Button 15</Button>
      </div>
      <div>
        <Button xl>Button 0</Button>
        <Button rounded xl success>Button 1</Button>
        <Button pill xl warning>Button 2</Button>
        <Button curved xl danger>Button 3</Button>
        <Button xl info>Button 4</Button>
        <Button xl muted>Button 5</Button>
  
        <Button xl outline success>Button 6</Button>
        <Button curved xl outline warning>Button 7</Button>
        <Button rounded xl outline danger>Button 8</Button>
        <Button pill xl outline info>Button 9</Button>
        <Button xl outline muted>Button 10</Button>
  
        <Button xl transparent success>Button 11</Button>
        <Button xl transparent warning>Button 12</Button>
        <Button curved xl transparent danger>Button 13</Button>
        <Button rounded xl transparent info>Button 14</Button>
        <Button pill xl transparent muted>Button 15</Button>
      </div>
  
      <div>
        <Checkbox label="Checkbox 1" value="Value 1" />
      </div>
      <div>
        <Checkbox type="2" label="Checkbox 2" value="Value 2" />
      </div>
      <div>
        <Radio label="Radio 1" name="radio1" value="Value 1" />
        <Radio name="radio1" value="Value 2" />
        <Radio name="radio1" value="Value 3" />
      </div>
      <div>
        <Radio type="2" label="Radio 2" name="radio2" value="Value 1" />
        <Radio type="2" name="radio2" value="Value 2" />
        <Radio type="2" name="radio2" value="Value 3" />
      </div>
      <div>
        <Switch label="Switch 0" />
        <Switch type="1" label="Switch 1" />
        <Switch type="2" label="Switch 2" />
        <Switch type="3" label="Switch 3" />
        <Switch type="4" label="Switch 4" />
        <Switch type="5" label="Switch 5" />
        <Switch type="6" label="Switch 6" />
        <Switch type="7" label="Switch 7" />
      </div>

      <div className="relative z-40">
        <Select label="Select 1" options={options} />
      </div>
      <div className="relative z-30">
        <Select label="Select 2" searchable={true} options={options} />
      </div>
    </div>
  );
};

export default Page;
