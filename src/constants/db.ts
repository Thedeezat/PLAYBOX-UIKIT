
export const ImageCarousels = `
  import React, { useState } from 'react';

  const ImageCarousels = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
    ];

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
      <div>
        <img src={images[currentIndex]} alt="carousel" />
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };

  export default ImageCarousels;
`;

export const Charts = `
  import React from 'react';
  import { Line } from 'react-chartjs-2';

  const Charts = () => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    return (
      <div>
        <h2>Charts and Graphs</h2>
        <Line data={data} />
      </div>
    );
  };

  export default Charts;
`;

export const SearchFilters = `
  import React, { useState } from 'react';

  const SearchFilters = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };

    return (
      <div>
        <h2>Search Filters</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <p>Filtering results for: {searchQuery}</p>
      </div>
    );
  };

  export default SearchFilters;
`;

export const MapIntegration = `
  import React from 'react';

  const MapIntegration = () => {
    return (
      <div>
        <h2>Map Integration</h2>
        {/* Map integration component logic (e.g., Google Maps or Leaflet) */}
      </div>
    );
  };

  export default MapIntegration;
`;

export const Popover = `
  import React, { useState } from 'react';

  const Popover = () => {
    const [isVisible, setIsVisible] = useState(false);

    const togglePopover = () => {
      setIsVisible((prev) => !prev);
    };

    return (
      <div>
        <button onClick={togglePopover}>Toggle Popover</button>
        {isVisible && (
          <div className="popover">
            <p>This is a popover message!</p>
          </div>
        )}
      </div>
    );
  };

  export default Popover;
`;

export const FileUpload = `
  import React, { useState } from 'react';

  const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    };

    const handleUpload = () => {
      if (file) {
        console.log('Uploading file:', file.name);
        // Logic to handle file upload
      }
    };

    return (
      <div>
        <h2>File Upload</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    );
  };

  export default FileUpload;
`;

export const SocialShare = `
  import React from 'react';

  const SocialShare = () => {
    return (
      <div>
        <h2>Social Sharing</h2>
        <button>Share on Facebook</button>
        <button>Share on Twitter</button>
        <button>Share on LinkedIn</button>
      </div>
    );
  };

  export default SocialShare;
`;

export const Ratings = `
  import React, { useState } from 'react';

  const Ratings = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };

    return (
      <div>
        <h2>Ratings and Reviews</h2>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRatingChange(star)}
              style={{
                color: star <= rating ? 'gold' : 'gray',
              }}
            >
              ★
            </button>
          ))}
        </div>
        <p>Your rating: {rating}</p>
      </div>
    );
  };

  export default Ratings;
`;

export const FeedbackForm = `
  import React, { useState } from 'react';

  const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');

    const handleChange = (e) => {
      setFeedback(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Feedback submitted:', feedback);
    };

    return (
      <div>
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={handleChange}
            placeholder="Enter your feedback"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

  export default FeedbackForm;
`;

export const ErrorHandler = `
  import React, { useState } from 'react';

  const ErrorHandler = () => {
    const [hasError, setHasError] = useState(false);

    const throwError = () => {
      setHasError(true);
    };

    const resetError = () => {
      setHasError(false);
    };

    if (hasError) {
      return (
        <div>
          <h2>An error has occurred!</h2>
          <button onClick={resetError}>Reset</button>
        </div>
      );
    }

    return (
      <div>
        <h2>No error</h2>
        <button onClick={throwError}>Simulate Error</button>
      </div>
    );
  };

  export default ErrorHandler;
`;


export const ContainerComponents = `
  import React from 'react';

  const Container = ({ children }) => {
    return <div style={{ padding: '20px', border: '1px solid #ccc' }}>{children}</div>;
  };

  export default Container;
`;

export const NavigationBars = `
  import React from 'react';

  const NavigationBar = () => {
    return (
      <nav style={{ display: 'flex', gap: '15px', background: '#333', padding: '10px', color: '#fff' }}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    );
  };

  export default NavigationBar;
`;

export const Sidebar = `
  import React from 'react';

  const Sidebar = () => {
    return (
      <aside style={{ width: '250px', background: '#eee', padding: '15px' }}>
        <ul>
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Profile</li>
        </ul>
      </aside>
    );
  };

  export default Sidebar;
`;

export const PageTemplates = `
  import React from 'react';

  const PageTemplate = ({ title, children }) => {
    return (
      <div style={{ padding: '20px' }}>
        <h1>{title}</h1>
        {children}
      </div>
    );
  };

  export default PageTemplate;
`;

export const FluidLayouts = `
  import React from 'react';

  const FluidLayout = ({ children }) => {
    return <div style={{ width: '100%', padding: '10px' }}>{children}</div>;
  };

  export default FluidLayout;
`;

export const TabbedInterfaces = `
  import React, { useState } from 'react';

  const TabbedInterface = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

    return (
      <div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {tabs.map((tab, index) => (
            <button key={index} onClick={() => setActiveTab(index)}>{tab}</button>
          ))}
        </div>
        <div style={{ marginTop: '20px' }}>
          <p>Content for {tabs[activeTab]}</p>
        </div>
      </div>
    );
  };

  export default TabbedInterface;
`;

export const ResponsiveImages = `
  import React from 'react';

  const ResponsiveImage = ({ src, alt }) => {
    return <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />;
  };

  export default ResponsiveImage;
`;

export const ResponsiveTypography = `
  import React from 'react';

  const ResponsiveTypography = () => {
    return (
      <div>
        <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>Responsive Heading</h1>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 2rem)' }}>This is responsive text.</p>
      </div>
    );
  };

  export default ResponsiveTypography;
`;

export const CollapsiblePanels = `
  import React, { useState } from 'react';

  const CollapsiblePanel = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
        {isOpen && <div>{children}</div>}
      </div>
    );
  };

  export default CollapsiblePanel;
`;

export const GridSystems = `
  import React from 'react';

  const GridSystem = () => {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        <div style={{ background: '#ddd', padding: '20px' }}>Item 1</div>
        <div style={{ background: '#ddd', padding: '20px' }}>Item 2</div>
        <div style={{ background: '#ddd', padding: '20px' }}>Item 3</div>
      </div>
    );
  };

  export default GridSystem;
`;
// db.ts

export const Input = `
  import React from 'react';

  const Input = ({ placeholder }) => {
    return <input type="text" placeholder={placeholder} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />;
  };

  export default Input;
`;

export const Button = `
  import React from 'react';

  const Button = ({ label, onClick }) => {
    return <button onClick={onClick} style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>{label}</button>;
  };

  export default Button;
`;

export const Checkbox = `
  import React, { useState } from 'react';

  const Checkbox = ({ label }) => {
    const [checked, setChecked] = useState(false);

    return (
      <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        {label}
      </label>
    );
  };

  export default Checkbox;
`;

export const RadioButton = `
  import React, { useState } from 'react';

  const RadioButton = ({ name, options }) => {
    const [selected, setSelected] = useState(null);

    return (
      <div>
        {options.map((option, index) => (
          <label key={index} style={{ display: 'block', marginBottom: '5px' }}>
            <input type="radio" name={name} value={option} checked={selected === option} onChange={() => setSelected(option)} />
            {option}
          </label>
        ))}
      </div>
    );
  };

  export default RadioButton;
`;

export const Rating = `
  import React, { useState } from 'react';

  const Rating = ({ maxStars = 5 }) => {
    const [rating, setRating] = useState(0);

    return (
      <div>
        {[...Array(maxStars)].map((_, index) => (
          <span key={index} onClick={() => setRating(index + 1)} style={{ cursor: 'pointer', fontSize: '20px', color: rating > index ? 'gold' : '#ccc' }}>
            ★
          </span>
        ))}
      </div>
    );
  };

  export default Rating;
`;

export const Select = `
  import React from 'react';

  const Select = ({ options }) => {
    return (
      <select style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    );
  };

  export default Select;
`;

export const Slider = `
  import React, { useState } from 'react';

  const Slider = ({ min, max, step }) => {
    const [value, setValue] = useState((min + max) / 2);

    return (
      <div>
        <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(e.target.value)} />
        <p>Value: {value}</p>
      </div>
    );
  };

  export default Slider;
`;

export const Switch = `
  import React, { useState } from 'react';

  const Switch = () => {
    const [enabled, setEnabled] = useState(false);

    return (
      <label style={{ display: 'inline-block', cursor: 'pointer' }}>
        <input type="checkbox" checked={enabled} onChange={() => setEnabled(!enabled)} style={{ display: 'none' }} />
        <span style={{ width: '40px', height: '20px', background: enabled ? '#007bff' : '#ccc', display: 'inline-block', borderRadius: '20px', position: 'relative' }}>
          <span style={{ width: '18px', height: '18px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '1px', left: enabled ? '20px' : '2px', transition: 'left 0.2s' }}></span>
        </span>
      </label>
    );
  };

  export default Switch;
`;

export const DropDown = `
  import React, { useState } from 'react';

  const DropDown = ({ options }) => {
    const [selected, setSelected] = useState(options[0]);

    return (
      <select onChange={(e) => setSelected(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    );
  };

  export default DropDown;
`;

export const ToggleButton = `
  import React, { useState } from 'react';

  const ToggleButton = ({ label }) => {
    const [active, setActive] = useState(false);

    return (
      <button onClick={() => setActive(!active)} style={{ padding: '10px 20px', background: active ? '#007bff' : '#ccc', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        {label}
      </button>
    );
  };

  export default ToggleButton;
`;

export const Alert = `
  import React from 'react';

  const Alert = ({ message, type }) => {
    const bgColor = type === 'error' ? '#f44336' : type === 'success' ? '#4CAF50' : '#ff9800';

    return (
      <div style={{ padding: '10px', backgroundColor: bgColor, color: 'white', borderRadius: '5px' }}>
        {message}
      </div>
    );
  };

  export default Alert;
`;

export const ProgressIndicator = `
  import React from 'react';

  const ProgressIndicator = ({ progress }) => {
    return (
      <div style={{ width: '100%', backgroundColor: '#ddd', borderRadius: '4px' }}>
        <div style={{ width: \`\${progress}%\`, height: '10px', backgroundColor: '#007bff', borderRadius: '4px' }}></div>
      </div>
    );
  };

  export default ProgressIndicator;
`;

export const BadgeNotification = `
  import React from 'react';

  const BadgeNotification = ({ count }) => {
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{ position: 'absolute', top: '-5px', right: '-5px', backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '4px 8px', fontSize: '12px' }}>
          {count}
        </span>
        🔔
      </div>
    );
  };

  export default BadgeNotification;
`;

export const SnackbarNotification = `
  import React, { useState } from 'react';

  const SnackbarNotification = ({ message }) => {
    const [visible, setVisible] = useState(true);

    return (
      visible && (
        <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#333', color: 'white', padding: '10px 20px', borderRadius: '4px' }}>
          {message}
        </div>
      )
    );
  };

  export default SnackbarNotification;
`;

export const Spinner = `
  import React from 'react';

  const Spinner = () => {
    return (
      <div style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #007bff', borderRadius: '50%', animation: 'spin 1s linear infinite' }}>
        <style>
          { \`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          \` }
        </style>
      </div>
    );
  };

  export default Spinner;
`;

export const ToastNotification = `
  import React, { useEffect, useState } from 'react';

  const ToastNotification = ({ message }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
      visible && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: '#444', color: 'white', padding: '10px 20px', borderRadius: '4px' }}>
          {message}
        </div>
      )
    );
  };

  export default ToastNotification;
`;

export const GeoLocationFeedback = `
  import React, { useState } from 'react';

  const GeoLocationFeedback = () => {
    const [location, setLocation] = useState(null);

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation(\`Latitude: \${position.coords.latitude}, Longitude: \${position.coords.longitude}\`);
        });
      } else {
        setLocation('Geolocation is not supported by this browser.');
      }
    };

    return (
      <div>
        <button onClick={getLocation} style={{ padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>Get Location</button>
        <p>{location}</p>
      </div>
    );
  };

  export default GeoLocationFeedback;
`;

export const UserFeedbackWidget = `
  import React, { useState } from 'react';

  const UserFeedbackWidget = () => {
    const [feedback, setFeedback] = useState('');

    return (
      <div>
        <textarea placeholder="Leave your feedback..." value={feedback} onChange={(e) => setFeedback(e.target.value)} style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <button style={{ marginTop: '10px', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>Submit</button>
      </div>
    );
  };

  export default UserFeedbackWidget;
`;

export const DragAndDrop = `
  import React, { useState } from 'react';

  const DragAndDrop = () => {
    const [dropped, setDropped] = useState(false);

    const handleDrop = (e) => {
      e.preventDefault();
      setDropped(true);
    };

    const handleDragOver = (e) => {
      e.preventDefault();
    };

    return (
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: '200px',
          height: '100px',
          border: '2px dashed #007bff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px'
        }}
      >
        {dropped ? 'Dropped!' : 'Drag file here'}
      </div>
    );
  };

  export default DragAndDrop;
`;

export const CachingMechanisms = `
  class Cache {
    constructor() {
      this.store = new Map();
    }

    set(key, value, ttl = 5000) {
      this.store.set(key, { value, expiry: Date.now() + ttl });
      setTimeout(() => this.store.delete(key), ttl);
    }

    get(key) {
      const item = this.store.get(key);
      if (!item || item.expiry < Date.now()) {
        this.store.delete(key);
        return null;
      }
      return item.value;
    }
  }

  export default new Cache();
`;

export const FileHandling = `
  import fs from 'fs';

  export const readFile = (filePath) => {
    return fs.promises.readFile(filePath, 'utf-8');
  };

  export const writeFile = (filePath, content) => {
    return fs.promises.writeFile(filePath, content, 'utf-8');
  };
`;

export const AuthenticationUtilities = `
  import bcrypt from 'bcrypt';

  export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  };

  export const comparePassword = async (password, hash) => {
    return bcrypt.compare(password, hash);
  };
`;

export const EncryptionUtilities = `
  import crypto from 'crypto';

  export const encrypt = (text, secretKey) => {
    const cipher = crypto.createCipher('aes-256-cbc', secretKey);
    return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
  };

  export const decrypt = (encryptedText, secretKey) => {
    const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
    return decipher.update(encryptedText, 'hex', 'utf8') + decipher.final('utf8');
  };
`;

export const EmailHandling = `
  import nodemailer from 'nodemailer';

  export const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: 'your-email@gmail.com', pass: 'your-password' } });
    await transporter.sendMail({ from: 'your-email@gmail.com', to, subject, text });
  };
`;

export const DataCompression = `
  import zlib from 'zlib';

  export const compress = (data) => {
    return zlib.deflateSync(data).toString('base64');
  };

  export const decompress = (compressedData) => {
    return zlib.inflateSync(Buffer.from(compressedData, 'base64')).toString();
  };
`;

export const DependencyInjection = `
  class Container {
    constructor() {
      this.dependencies = new Map();
    }

    register(name, dependency) {
      this.dependencies.set(name, dependency);
    }

    resolve(name) {
      return this.dependencies.get(name);
    }
  }

  export default new Container();
`;

export const UtilitiesLibrary = `
  export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  export const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };
`;

export const Statistics = `
  export const mean = (numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  };

  export const median = (numbers) => {
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
  };
`;

export const SearchAndIndexing = `
  export class SearchIndex {
    constructor() {
      this.index = new Map();
    }

    addDocument(id, text) {
      text.split(' ').forEach((word) => {
        if (!this.index.has(word)) this.index.set(word, new Set());
        this.index.get(word).add(id);
      });
    }

    search(query) {
      return this.index.get(query) || new Set();
    }
  }

  export default new SearchIndex();
`;

export const Badge = `
  import React from "react";

  const Badge = ({ text }) => {
    return (
      <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-sm">
        {text}
      </span>
    );
  };

  export default Badge;
`;

export const Lists = `
  import React from "react";

  const Lists = ({ items }) => {
    return (
      <ul className="list-disc pl-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  export default Lists;
`;

export const Divider = `
  import React from "react";

  const Divider = () => {
    return <hr className="border-t border-gray-300 my-4" />;
  };

  export default Divider;
`;

export const Typography = `
  import React from "react";

  const Typography = () => {
    return (
      <div>
        <h1 className="text-3xl font-bold">Heading 1</h1>
        <h2 className="text-2xl font-semibold">Heading 2</h2>
        <p className="text-base">This is a paragraph with default styling.</p>
      </div>
    );
  };

  export default Typography;
`;

export const Tables = `
  import React from "react";

  const Tables = ({ data }) => {
    return (
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {Object.keys(data[0] || {}).map((key) => (
              <th key={key} className="border border-gray-300 px-4 py-2">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border border-gray-300">
              {Object.values(row).map((val, i) => (
                <td key={i} className="border border-gray-300 px-4 py-2">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  export default Tables;
`;

export const DataGrids = `
  import React from "react";

  const DataGrids = ({ items }) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="p-4 border rounded shadow">
            {item}
          </div>
        ))}
      </div>
    );
  };

  export default DataGrids;
`;

export const DataComparisons = `
  import React from "react";

  const DataComparisons = ({ comparisonData }) => {
    return (
      <div className="grid grid-cols-2 gap-4">
        {comparisonData.map(({ label, value }, index) => (
          <div key={index} className="p-2 border rounded">
            <span className="font-semibold">{label}: </span>
            {value}
          </div>
        ))}
      </div>
    );
  };

  export default DataComparisons;
`;

export const ChartsAndGraphs = `
  import React from "react";
  import { Bar } from "react-chartjs-2";
  import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from "chart.js";

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

  const ChartsAndGraphs = ({ data }) => {
    return (
      <Bar
        data={data}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Sample Chart",
            },
          },
        }}
      />
    );
  };

  export default ChartsAndGraphs;
`;
