/**
 * Security Utilities for Lilac Minds
 * Following OWASP best practices for frontend input validation
 */

const VALIDATION_RULES = {
    name: {
      minLength: 2,
      maxLength: 100,
      pattern: /^[a-zA-Z\s\-'.]+$/,
      message: 'Name must be 2-100 characters, letters only'
    },
    email: {
      minLength: 5,
      maxLength: 254,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Please enter a valid email address'
    },
    phone: {
      minLength: 10,
      maxLength: 15,
      pattern: /^[+]?[\d\s\-()]{10,15}$/,
      message: 'Phone must be 10-15 digits'
    },
    city: {
      minLength: 2,
      maxLength: 100,
      pattern: /^[a-zA-Z\s\-'.]+$/,
      message: 'City must be 2-100 characters, letters only'
    },
    message: {
      minLength: 0,
      maxLength: 1000,
      pattern: null,
      message: 'Message must be under 1000 characters'
    },
    service: {
      allowedValues: ['personal', 'career', 'student', 'assessment', 'other', ''],
      message: 'Please select a valid service'
    }
  };
  
  export const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';
    return input
      .trim()
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .slice(0, 2000);
  };
  
  export const validateField = (fieldName, value) => {
    const sanitized = sanitizeInput(value);
    const rule = VALIDATION_RULES[fieldName];
    
    if (!rule) {
      return { isValid: true, value: sanitized, error: null };
    }
  
    if (rule.allowedValues) {
      const isValid = rule.allowedValues.includes(sanitized);
      return {
        isValid,
        value: sanitized,
        error: isValid ? null : rule.message
      };
    }
  
    if (sanitized.length < rule.minLength) {
      return {
        isValid: false,
        value: sanitized,
        error: rule.message
      };
    }
  
    if (sanitized.length > rule.maxLength) {
      return {
        isValid: false,
        value: sanitized.slice(0, rule.maxLength),
        error: rule.message
      };
    }
  
    if (rule.pattern && !rule.pattern.test(sanitized)) {
      return {
        isValid: false,
        value: sanitized,
        error: rule.message
      };
    }
  
    return { isValid: true, value: sanitized, error: null };
  };
  
  export const validateForm = (formData, requiredFields = []) => {
    const errors = {};
    const sanitizedData = {};
    let isValid = true;
  
    for (const [key, value] of Object.entries(formData)) {
      const result = validateField(key, value);
      sanitizedData[key] = result.value;
      
      if (!result.isValid) {
        errors[key] = result.error;
        isValid = false;
      } else if (requiredFields.includes(key) && !result.value) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        isValid = false;
      }
    }
  
    return { isValid, errors, sanitizedData };
  };
  
  const rateLimitStore = new Map();
  
  export const checkRateLimit = (key, maxAttempts = 3, windowMs = 60000) => {
    const now = Date.now();
    const record = rateLimitStore.get(key);
  
    if (!record) {
      rateLimitStore.set(key, { count: 1, firstAttempt: now });
      return { allowed: true, remainingAttempts: maxAttempts - 1, retryAfter: 0 };
    }
  
    if (now - record.firstAttempt > windowMs) {
      rateLimitStore.set(key, { count: 1, firstAttempt: now });
      return { allowed: true, remainingAttempts: maxAttempts - 1, retryAfter: 0 };
    }
  
    if (record.count >= maxAttempts) {
      const retryAfter = Math.ceil((windowMs - (now - record.firstAttempt)) / 1000);
      return { allowed: false, remainingAttempts: 0, retryAfter };
    }
  
    record.count++;
    rateLimitStore.set(key, record);
    return { allowed: true, remainingAttempts: maxAttempts - record.count, retryAfter: 0 };
  };
  
  export const resetRateLimit = (key) => {
    rateLimitStore.delete(key);
  };
  
  export const useFormSecurity = () => {
    const validate = (formData, requiredFields) => validateForm(formData, requiredFields);
    
    const canSubmit = (formId, maxAttempts = 5, windowMs = 60000) => {
      return checkRateLimit(formId, maxAttempts, windowMs);
    };
  
    return { validate, canSubmit, sanitizeInput };
  };
  